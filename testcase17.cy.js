  describe("Login operation and accessing user recommended needs", () => {
    //Start of Login Request:
    it("Login Request with post method", () => {

      cy.request({
        method:'POST', 
        url:'https://iwanttohelp.bim.assistcloud.services/auth/signin',
        body: {
            "auth":{
                "phone_number": "0766303737",
                "password": "Assist1"
            }
        }
      })
        // Treating the request:
        .then(function(response){
          expect(response.body.user.first_name).to.equal('Mary');
          expect(response.status).to.equal(201);
  
          // Subsequent Request with Token from Login:
          var myVal=response.body.jwt;
          // Next, define the object for creating a need:
          var obj="{\"contact_first_name\": \"Mary\",\"contact_last_name\": \"MI\",\"contact_phone_number\": \"0766303737\",\"category\": \"others\",\"description\": \"abc\",\"address\": {\"street_name\": \"Oituz\",\"details\": \"mansarda\",\"county\": \"Suceava\",\"city\": \"Suceavaa\",\"postal_code\": \"765765\"}}"
         //Launching the Request for creating a new recommended need:
         cy.request({
              method:'GET', 
              url:'https://iwanttohelp.bim.assistcloud.services/volunteers/api/v1/recommended_needs',
              headers:{
                Authorization: "Bearer " + myVal,
                accept: 'application/json'
              },
              body:{
                obj
              }
            })
              .then(function(response){
                expect(response.status).to.equal(200);
                var myNewID = response.body.need.id
                // Next, view the newly created need:
                cy.request({
                    method:'GET', 
                    url:'https://iwanttohelp.bim.assistcloud.services/volunteers/api/v1/recommended_needs/'+myNewID,
                    headers:{
                      Authorization: "Bearer " + myVal,
                      accept: 'application/json'
                    }
                  })
                    .then(function(response){
                      expect(response.status).to.equal(200);
                      //var myNewID = response.body.need.id
                    });
                // Done viewing the newly created need
      
                // Next, delete the newly created need:
                cy.request({
                    method:'DELETE', 
                    url:'https://iwanttohelp.bim.assistcloud.services/volunteers/api/v1/recommended_needs/'+myNewID,
                    headers:{
                      Authorization: "Bearer " + myVal,
                      accept: 'application/json'
                    }
                  })
                    .then(function(response){
                      expect(response.status).to.equal(200);
                      //var myNewID = response.body.need.id
                    });
                // Done deleting the newly created need






              });
        });


});
})
