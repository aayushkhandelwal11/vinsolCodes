/*
Author - Sahil Bathla
Description : -
    Add five new list items to the end of the unordered list #myList.
    Remove the odd list items
    Add another h2 and another paragraph to the last div.module
    Add another option to the select element; give the option the value "Wednesday"
    Add a new div.module to the page after the last one; put a copy of one of the existing images inside of it.
*/

$(document).ready(function()
{
  // Add five new list items to the end of the unordered list #myList.
  var listItems = '', maxListItems = 5,lastDiv;
  for (i = 0;i < maxListItems;i = i + 1)
  {
    listItems = listItems + '<li> New List Item </li>';
  } 
  $('#myList').append(listItems);

  // Remove the odd list items
  $('ul li:odd').remove();

  // Add another h2 and another paragraph to the last div.module
  $('div.module').last().append('<h2>New Heading</h2>').append('<p>New Paragraph</p>');

  // Add another option to the select element; give the option the value "Wednesday"
  $('select').append('<option>Wednesday</option>').children().last().attr('value','Wednesday');

  // Add a new div.module to the page after the last one; put a copy of one of the existing images inside of it. 
  $('div.module').after('<div></div>').next().addClass('module');
  lastDiv = $('div.module').last();
  $('img').first().clone().appendTo(lastDiv);

});


