import './styles.css';
import { Entry } from './entry';

$(document).ready(function() {
  $('#entry-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var output = new Entry(title, body);
    $('#my-entries').append("<h2>" + output.title + "</h2>" + "<p>" + output.body + "</p>" + "<hr>" + "<p>Journal Entry Word Count: " + output.countWords(body) + "</p>" + "<p>Journal Entry Vowel Count: " + output.countVowels(body) + "</p>" + "<p>Journal Entry Consonant Count: " + output.countConsonants(body) + "</p><hr>");
  });
});
