$(function () {
  $('[data-toggle="popover"]').popover()
});
$('.popover-dismiss').popover({
  trigger: 'hover'
});
$('a[rel=popover]').popover({
  html: true,
  trigger: 'hover',
  placement: 'top',
  content: function () {
    return '<img src="'+$(this).data('img') + '" />';
  }
});
