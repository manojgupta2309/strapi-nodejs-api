'use strict';
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {

    // To update the discounted price
    async activities_price(ctx) {

    // discount from request body
    let discount = ctx.request.body.Discount;
  
    // listing all activities to update
    let activities = await strapi.query('activity').find({});

    activities.forEach(async activity=>{
        //calculating the final Price
        let finalPrice = (activity.Price-((activity.Price*discount)/100)).toFixed(2)

        //updating the exisiting  price to final discounted price for all records
        await strapi.query('activity').update({ id:activity.id},{
            Price:finalPrice
        });
    })
    ctx.send({
        ok: true
      });
    },
    async create(ctx) {
        // creating a new record
        let activity = await strapi.services.activity.create(ctx.request.body);
        // calling email service send method to send the email
        /**
         * @param(from emailId , to emailId, Subject , message)
         * 
         */
        strapi.services.email.send('no-reply@mallorcard.es','info@mallorcard.es', 'Welcome', 'we are happy to have you onboard');
   
       
        return sanitizeEntity(activity, { model: strapi.models.activity });
     },
};
