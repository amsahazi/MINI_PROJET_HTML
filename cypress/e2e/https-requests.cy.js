/*/// <reference types ="cypress"/>

describe("https requests" ,()=>{
    it("should perfom request get", ()=>{
  cy.request("https://reqres.in/api/users?page=2").then((response)=>{
    const body = response.body;
    expect(body.data).lengthOf(6);
  });
    })
  it("should Delete http method", ()=>{
    cy.request("DELETE", "https://reqres.in/api/users/2")
    .its("status")
    .should("eq",204);
  })
    it("should create a user post",()=>{
        cy.request({
            method:"POST", 
            url:"https://reqres.in/api/users", 
           body: {
                "name": "Abdallah",
                "job": "Engineer QA",
            },
    }).then((response)=>{
      expect(response.status).eq(201);
      expect(response.body.name).not.null
      expect(response.body.name).eq("Abdallah")
      expect(response.body.job).eq("Engineer QA")
    });
    });
    it("should update a user PUT",()=>{
        cy.request({
            method:"PUT", 
            url:"https://reqres.in/api/users/2", 
           body: {
                "name": "Jasim",
                "job": "Engineer QA",
            },
    }).then((response)=>{
      expect(response.status).eq(200);
      expect(response.body.name).not.null
      expect(response.body.name).eq("Jasim")
      expect(response.body.job).eq("Engineer QA")
    });
    });

});*/
