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
            cy.request({
              method:'GET', 
              url:'https://iwanttohelp.bim.assistcloud.services/volunteers/api/v1/charts/user_recomended_needs',
              headers:{
                Authorization: "Bearer " + myVal,
                accept: 'application/json'
              }
            })
              .then(function(response){
                expect(response.status).to.equal(200);
              });
        });


});
})
