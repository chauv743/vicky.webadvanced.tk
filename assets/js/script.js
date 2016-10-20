$("h1").click(function () {
      $(this).hide();
      $("#wrapper").show();
});

//HELLO WORLD
$("#hello-world").click(function () {
      $("#hello-world-info").slideDown();
});

$("#domain, #pattern-generator, #sender-receiver").click(function () {
      $("#hello-world-info").hide();
});

//PATTERN GENERATOR
$("#pattern-generator").click(function () {
      $("#pattern-generator-info").slideDown();
});

$("#hello-world, #domain, #sender-receiver").click(function () {
      $("#pattern-generator-info").hide();
});

//DOMAIN
$("#domain").click(function () {
      $("#domain-info").slideDown();
});

$("#hello-world, #pattern-generator, #sender-receiver").click(function () {
      $("#domain-info").hide();
});


//SENDER RECEIVER
$("#sender-receiver").click(function () {
      $("#sender-receiver-info, #smiley").slideDown();
});

$("#hello-world, #pattern-generator, #domain").click(function () {
      $("#sender-receiver-info").hide();
});
