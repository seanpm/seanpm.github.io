var options = {
  valueNames: [ 'timeline-title', 'timestamp', 'category' ]
};

var historyList = new List('history-items', options);

$('#filter-documents').click(function() {
  historyList.filter(function(item) {
    if (item.values().category == "Documents") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-messages').click(function() {
  historyList.filter(function(item) {
    if (item.values().category == "Messages") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});
$('#filter-none').click(function() {
  historyList.filter();
  return false;
});

var selector = '.filter li';

$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});