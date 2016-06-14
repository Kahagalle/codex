var should = require("should")
    , routes = require("./data");

var request = {};
var response = {
    viewName: ""
    , data : {}
    , render: function(view, viewData) {
        this.viewName = view;
        this.data = viewData;
    }
};

describe("Routing", function(){
    describe("Main Route", function(){
        it("should provide the index page", function(){
            routes.index(request, response);
            response.viewName.should.equal("index");
        });

        it("should provide the register page", function(){
            routes.register(request, response);
            response.viewName.should.equal("register");
        });

        it("should provide the login page", function(){
            routes.login(request, response);
            response.viewName.should.equal("login");
        });

        it("should provide the index page at the logout", function(){
            routes.logout(request, response);
            response.viewName.should.equal("index");
        });

        it("should provide the all challenges list", function(){
            routes.c(request, response);
            response.viewName.should.equal("ch");
        });
    });

    describe("Challenge Route", function(){
        it("should provide the challenge 1", function(){
            routes.c1(request, response);
            response.viewName.should.equal("ch/ch1");
        });
        it("should provide the challenge 2", function(){
            routes.c2(request, response);
            response.viewName.should.equal("ch/ch2");
        });
        it("should provide the challenge 3", function(){
            routes.c3(request, response);
            response.viewName.should.equal("ch/ch3");
        });
        it("should provide the challenge 4", function(){
            routes.c4(request, response);
            response.viewName.should.equal("ch/ch4");
        });
        it("should provide the challenge 5", function(){
            routes.c5(request, response);
            response.viewName.should.equal("ch/ch5");
        });
        it("should provide the challenge 6", function(){
            routes.c6(request, response);
            response.viewName.should.equal("ch/ch6");
        });
        it("should provide the challenge 7", function(){
            routes.c7(request, response);
            response.viewName.should.equal("ch/ch7");
        });
        it("should provide the challenge 8", function(){
            routes.c8(request, response);
            response.viewName.should.equal("ch/ch8");
        });
        it("should provide the challenge 9", function(){
            routes.c9(request, response);
            response.viewName.should.equal("ch/ch9");
        });
        it("should provide the challenge 10", function(){
            routes.c10(request, response);
            response.viewName.should.equal("ch/ch10");
        });
        it("should provide the challenge 11", function(){
            routes.c11(request, response);
            response.viewName.should.equal("ch/ch11");
        });
        it("should provide the challenge 12", function(){
            routes.c12(request, response);
            response.viewName.should.equal("ch/ch12");
        });
        it("should provide the challenge 13", function(){
            routes.c13(request, response);
            response.viewName.should.equal("ch/ch13");
        });
        it("should provide the challenge 14", function(){
            routes.c14(request, response);
            response.viewName.should.equal("ch/ch14");
        });
        it("should provide the challenge 15", function(){
            routes.c15(request, response);
            response.viewName.should.equal("ch/ch15");
        });
        it("should provide the challenge 16", function(){
            routes.c16(request, response);
            response.viewName.should.equal("ch/ch16");
        });
        it("should provide the challenge 17", function(){
            routes.c17(request, response);
            response.viewName.should.equal("ch/ch17");
        });
        it("should provide the challenge 18", function(){
            routes.c18(request, response);
            response.viewName.should.equal("ch/ch18");
        });
        it("should provide the challenge 19", function(){
            routes.c19(request, response);
            response.viewName.should.equal("ch/ch19");
        });
        it("should provide the challenge 20", function(){
            routes.c20(request, response);
            response.viewName.should.equal("ch/ch20");
        });
        it("should provide the challenge 21", function(){
            routes.c21(request, response);
            response.viewName.should.equal("ch/ch21");
        });
        it("should provide the challenge 22", function(){
            routes.c22(request, response);
            response.viewName.should.equal("ch/ch22");
        });
        it("should provide the challenge 23", function(){
            routes.c23(request, response);
            response.viewName.should.equal("ch/ch23");
        });
        it("should provide the challenge 24", function(){
            routes.c24(request, response);
            response.viewName.should.equal("ch/ch24");
        });
        it("should provide the challenge 25", function(){
            routes.c25(request, response);
            response.viewName.should.equal("ch/ch25");
        });
        it("should provide the challenge 26", function(){
            routes.c26(request, response);
            response.viewName.should.equal("ch/ch26");
        });
        it("should provide the challenge 27", function(){
            routes.c27(request, response);
            response.viewName.should.equal("ch/ch27");
        });
        it("should provide the challenge 28", function(){
            routes.c28(request, response);
            response.viewName.should.equal("ch/ch28");
        });
        it("should provide the challenge 29", function(){
            routes.c29(request, response);
            response.viewName.should.equal("ch/ch29");
        });
        it("should provide the challenge 30", function(){
            routes.c30(request, response);
            response.viewName.should.equal("ch/ch30");
        });
    });
});