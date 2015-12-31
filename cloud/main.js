// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
AV.Cloud.define("hello", function(request, response) {
  response.success("Hello world--qiurong!");
});
AV.Cloud.define("findUser",function(request,response){
var userOId=request.params.userOId;
var queryUser=new AV.Query('_User')
queryUser.equalTo("objectId",userOId);
queryUser.first({
success:function(obj){

console.log("---uu--"+JSON.stringify(obj));
response.success(obj.get("username"));
},error:function(errObj,error){
console.log("------");
}

});

})