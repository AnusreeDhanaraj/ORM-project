// src/services/SharePointService.js
import { SSRProvider, useIsSSR, useSSRSafeId } from '@react-aria/ssr';


const SP_PROXY_URL = 'http://localhost:8080';

/**
 * Fetches the request digest needed for POST requests in SharePoint.
 */
async function getDigestValue() {
  const response = await fetch(`${SP_PROXY_URL}/_api/contextinfo`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json;odata=verbose',
      'Content-Type': 'application/json;odata=verbose',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch request digest: ${response.statusText}`);
  }

  const data = await response.json();
  return data.d.GetContextWebInformation.FormDigestValue;
}

/**
 * Get headers with the SharePoint request digest.
 * @param {string} digestValue - The SharePoint request digest value.
 */
function getHeaders(digestValue) {
  return {
    'Accept': 'application/json;odata=verbose',
    'Content-Type': 'application/json;odata=verbose',
    'X-RequestDigest': digestValue,
  };
}

/**
 * Fetches all items from a specific SharePoint list.
 * @param {string} digestValue - The SharePoint request digest value.
 */
async function getSharePointListItems(digestValue) {
  const listUrl = `${SP_PROXY_URL}/sites/Learning/Open_Tracker/_api/web/lists/getbytitle('Add_Actionable')/items`;

//  api-sett
  // return new Promise(()); 
  return new Promise (  [
    {
      userId: "user1",
      component: "Component A",
      sourceOfIssue: "Source A",
      dateOfIssue: "2023-05-01",
      vendorName: "Vendor A",
      riskRating: "High",
      issueDescription: "Description of the issue for User 1",
      remarks: "Remarks for User 1",
      teamLeaderName: "Leader A",
      issueCreator: "Creator A",
      uploadFiles: "file1.pdf"
    },
    {
      userId: "user2",
      component: "Component B",
      sourceOfIssue: "Source B",
      dateOfIssue: "2023-05-02",
      vendorName: "Vendor B",
      riskRating: "Medium",
      issueDescription: "Description of the issue for User 2",
      remarks: "Remarks for User 2",
      teamLeaderName: "Leader B",
      issueCreator: "Creator B",
      uploadFiles: "file2.pdf"
    },

    {
      userId: "user3",
      component: "Component c",
      sourceOfIssue: "Source c",
      dateOfIssue: "2023-05-02",
      vendorName: "Vendor c",
      riskRating: "Medium",
      issueDescription: "Description of the issue for User 3",
      remarks: "Remarks for User 3",
      teamLeaderName: "Leader c",
      issueCreator: "Creator c",
      uploadFiles: "file2.pdf"
    },
    
    {
      userId: "user4",
      component: "Component c",
      sourceOfIssue: "Source c",
      dateOfIssue: "2023-05-02",
      vendorName: "Vendor c",
      riskRating: "Medium",
      issueDescription: "Description of the issue for User 3",
      remarks: "Remarks for User 3",
      teamLeaderName: "Leader c",
      issueCreator: "Creator c",
      uploadFiles: "file2.pdf"
    },
  ]
      ) ; 
//  main
  const response = await fetch(listUrl, {
    method: 'GET',
    headers: getHeaders(digestValue),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch SharePoint list items: ${response.statusText}`);
  }

  const data = await response.json();
  return data.d.results;
}

export { getDigestValue, getSharePointListItems };
