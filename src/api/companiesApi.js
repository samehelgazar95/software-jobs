import supabaseClient, { supabaseUrl } from '@/lib/supabase';

// Fetch Companies
export async function getCompanies(token) {
  const supabase = await supabaseClient(token);
  const { data, error } = await supabase.from('companies').select('*');

  if (error) {
    console.error('Error fetching Companies:', error);
    return null;
  }

  return data;
}

// Add Company
export async function addNewCompany(token, _, companyData) {
  const supabase = await supabaseClient(token);

  // Generate random filename for the logo
  const random = Math.floor(Math.random() * 90000);
  const fileName = `logo-${random}-${companyData.name}`;

  // Get the MIME type for the logo file
  const fileType = companyData.logo.type;

  // Validate if file type is supported (already validated client-side)
  if (!['image/png', 'image/jpeg', 'image/svg+xml'].includes(fileType)) {
    throw new Error('Unsupported file format');
  }

  // Upload the logo to Supabase storage
  const { error: storageError } = await supabase.storage
    .from('company-logo')
    .upload(fileName, companyData.logo, {
      contentType: fileType, // Ensures the correct file type is used
    });

  // Throw error if storage failed
  if (storageError) {
    console.error('Error uploading Company Logo:', storageError.message);
    throw new Error('Error uploading Company Logo');
  }

  // Construct the URL for the uploaded logo
  const logo_url = `${supabaseUrl}/storage/v1/object/public/company-logo/${fileName}`;

  // Insert the new company record into the `companies` table
  const { data, error: dbError } = await supabase
    .from('companies')
    .insert([
      {
        name: companyData.name,
        logo_url: logo_url, // Save the URL of the logo in the database
      },
    ])
    .select();

  // Handle any database errors
  if (dbError) {
    console.error('Error inserting company data:', dbError.message);
    throw new Error('Error submitting Companies');
  }

  // Return the newly created company data
  return data;
}
