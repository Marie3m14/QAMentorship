

  describe("Login operation", () => {

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
        .then(function(response){
          this.value = response.body.accessToken;
          console.log("Value "+this.value);
  
          expect(response.body.user.first_name).to.equal('Mary');
          expect(response.status).to.equal(201);
          localStorage.setItem('tokenvalue', response.jwt)
          this.value = response.body.accessToken;
        });


/*
        var tokenvalue=localStorage.accessToken
        cy.request({
            method:'GET', 
            url:'https://iwanttohelp.bim.assistcloud.services/volunteers/api/v1/profile',
            headers:{
              Authorization: "Bearer " + tokenvalue,
              accept: 'application/json'
            }
          })
            .then(function(response){
              expect(response.status).to.equal(304);
            });
  
*/


var authHeader='bearer ${'+this.value+'}';
const options = {
  method: 'GET',
  url: `https://iwanttohelp.bim.assistcloud.services/volunteers/api/v1/profile`,
  headers:{
    authorization:authHeader,
  }};

cy.request(options)
  .then((response)=>{
    expect(response.status).to.equal(200);6+9
  });


    });
  







})
