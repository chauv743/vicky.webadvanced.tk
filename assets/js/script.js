$("h1").click(function () {
      // $(this).hide();
      $("#wrapper").show();
});

//HELLO WORLD
$("#hello-world").click(function () {
      $("h1").hide();
      $("#hello-world-info").slideDown();
});

$("#domain, #pattern-generator, #sender-receiver").click(function () {
      $("h1").hide();
      $("#hello-world-info").hide();
});

//PATTERN GENERATOR
$("#pattern-generator").click(function () {
      $("h1").hide();
      $("#pattern-generator-info").slideDown();
});

$("#hello-world, #domain, #sender-receiver").click(function () {
      $("h1").hide();
      $("#pattern-generator-info").hide();
});

//DOMAIN
$("#domain").click(function () {
      $("h1").hide();
      $("#domain-info").slideDown();
});

$("#hello-world, #pattern-generator, #sender-receiver").click(function () {
      $("h1").hide();
      $("#domain-info").hide();
});


//SENDER RECEIVER
$("#sender-receiver").click(function () {
      $("h1").hide();
      $("#sender-receiver-info, #smiley").slideDown();
});

$("#hello-world, #pattern-generator, #domain").click(function () {
      $("h1").hide();
      $("#sender-receiver-info").hide();
});
