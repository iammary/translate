// Full, permissive scope to access all of a user's files.
// Request this scope only when it is strictly necessary.
// More options here:
// https://developers.google.com/drive/v3/web/about-auth
export const SCOPE = [ 'https://www.googleapis.com/auth/drive' ];

// Folder location relative to current directory
// export const LANGUAGE_FOLDER = '/newt/ti-portal-scb/app/assets/src/common/constants';
export const LANGUAGE_FOLDER = '/language';

// Google Drive Document ID
export const DOCUMENT_ID = process.env.TRANSLATE_FILE || `GOOGLE_DOCUMENT_ID`;

// File name of translation file to be stored at the LANGUAGE_FOLDER
export const TRANSLATION_FILE = 'language';

// Language code with its corresponding header title on Google Docs
// [ 'language_code', 'header_title']
export const LANGUAGES = new Map( [
  [ 'en', 'EN' ],
  [ 'th', 'TH' ]
] );

export const CLIENT_SECRET = {
  installed: {
    client_id: process.env.TRANSLATE_ID || 'GOOGLE_TRANSLATE_CLIENT_ID',
    project_id: "csv-download-1379",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://accounts.google.com/o/oauth2/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_secret: process.env.TRANSLATE_SECRET || "GOOGLE_CLIENT_SECRET_HERE",
    redirect_uris: [
      "urn:ietf:wg:oauth:2.0:oob",
      "http://localhost"
    ]
  }
};