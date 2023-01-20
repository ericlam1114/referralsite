

const mailchimp = require("@mailchimp/mailchimp_marketing");
// set up express server



mailchimp.setConfig({
    apiKey: "b8e0e8a063c0dca5597ab77cc1cb5242-us14",
    server: "us14",
});



async function run(email) {
    const listId = "bde9e8b4f3";
    const subscribingUser = {
    //   firstName: "Prudence",
    //   lastName: "McVankab",
      email: email,
    };
    const response = await mailchimp.lists.addListMember(listId, {
    email_address: subscribingUser.email,
    status: "subscribed",
    merge_fields: {
      FNAME: subscribingUser.firstName,
      LNAME: subscribingUser.lastName
    }
  });

  console.log(
    `Successfully added contact as an audience member. The contact's id is ${
      response.id
    }.`
  );
}




// export to main.js
module.exports = run;
