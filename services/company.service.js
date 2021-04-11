const { default: axios } = require("axios");

/**
 * @class CompanyService
 * @classdesc class for company service layer
 * 
 */
class CompanyService {

    /**
     * getMeetComany
     * @memberof CompanyService
     * @description function to get the company details
     * @param {*} companyName company name to find the details for
     * @returns 
     */
    async getMeetCompany(companyName) {
        try {

            // hit the meet api for 50 companines
            const companies = await axios.get('http://dev.meetworks.in:9000/companies/getallcompanies/1/50');
            
            // find the company 
            let seekCompany = companies.data.find((company) =>  company.company_name == companyName);
            
            // if not found return a message
            if(!seekCompany) {
                return {
                    found: false,
                    message: 'No Matching Company Found',
                    data: null
                }
            }
    
            // found comany return basic details
            const { company_id, company_name, latitude, longitude } = seekCompany;
            return {
                found: true,
                message: 'Found',
                data: {
                    company_id, company_name, latitude, longitude 
                }
            }
        } catch (err) {
            // if server err occur, send a message
            return {
                found: false,
                message: 'Something went wrong! please try again',
                data: null
            }
        }
    }

}

module.exports = new CompanyService();