var client = contentful.createClient({
  space: 'ug3k80oom457',
  accessToken: '4dd8a222e67ba04e986ec9122b1019169899fb9587af5600c3f848cc67eeb118',
  secure: true
});

var create = function(entries) {
	$.each($.grep(entries, function(_entry){ return _entry.fields.company }),
   function(key, entry) {
    var li = $(document.createElement('li'));
    li.append($('<h3>' + entry.fields.company + '</h3>'));
    li.append($('<span>' + entry.fields.years + '</span>'));
    li.append($('<h4>' + entry.fields.position + '</h4>'));
    li.append($('<p>' + entry.fields.jobDescription + '</p>'));
    $('.work .list').append(li);
  });

	$.each($.grep(entries, function(_entry){ return _entry.fields.university }),
   function(key, entry) {
	   var li = $(document.createElement('li'));
	   li.append($('<h3>' + entry.fields.university + '</h3>'));
	   li.append($('<span>' + entry.fields.years + '</span>'));
	   li.append($('<h4>' + entry.fields.degree + '</h4>'));
	   $('.education .list').append(li);
  });

	$.each($.grep(entries, function(_entry){ return _entry.fields.language }),
   function(key, entry) {
     var li = $(document.createElement('li'));
     li.append($('<h3>' + entry.fields.language + '</h3>'));
     li.append($('<p>' + entry.fields.level + '</p>'));
     $('.languages .list').append(li);
  });

	$.each($.grep(entries, function(_entry){ return _entry.fields.skill }),
   function(key, entry) {
     var li = $(document.createElement('li'));
     li.append($('<h4>' + entry.fields.skill + '</h4>'));
     $('.skills .list').append(li);
  });

	$.each($.grep(entries, function(_entry){ return _entry.fields.interest }),
   function(key, entry) {
     var li = $(document.createElement('li'));
     li.append($('<h4>' + entry.fields.interest + '</h4>'));
     $('.interests .list').append(li);
   });
}

client.entries({}, function(err, entries) {
  if (err) { console.log(err); return; }

  create(entries);
});
