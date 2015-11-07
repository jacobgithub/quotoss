var quotes = ['Power overwhelming!', 'Dou cola!', 'Doom to all who threaten the homeworld', 'What hahm set.', 'Droh so kah!', 'Our enemies are in legion . . .'];
quotes.push('My life for Auir!');
quotes.push('En Taro Tassadar!');
quotes.push('I fear no enemy!');
quotes.push('For the Khala is my strength!');
quotes.push('I fear not death.');
quotes.push('I hunger for battle...');
quotes.push('For our strength is eternal.');

$(document).ready(function() {

  $('.quote').click(function() {
    $('p.quote-block').html(quotes[Math.floor(Math.random() * quotes.length)]);

    $('a.tweet').attr('href', 'https://twitter.com/intent/tweet?text=' + $('p.quote-block').html() + '&url=http://codepen.io/jacobgithub/pen/PPBLpo');
  });
});