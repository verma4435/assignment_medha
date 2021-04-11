const companyService = require("../services/company.service");

/**
 * CompanyController
 * @class
 * @classdesco controller class for the company
 */
class CompanyController {

    /**
     * getMeetCompany
     * @memberof CompanyController
     * @description function to fetch a given company's details
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async getMeetCompany(req,res) {
        const { name }= req.query;

        // get meet compnay service call
        const companyStatus = await companyService.getMeetCompany(name);

        // not found send a message
        if(!companyStatus.found) {
            return res.json({
                code: 404,
                message: companyStatus.message
            });
        }

        // send the comapny detail
        return res.json({
            code: 200,
            data: companyStatus.data
        })
    }
}

module.exports = new CompanyController();