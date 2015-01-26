OMDB Lab
========

In this lab we're going to make use of this week's jQuery lessons. The
main objective will be to search the
[OMDB API](http://www.omdbapi.com/) using jQuery's AJAX methods. A
secondary objective will be to reinfornce our use of jQuery to
interact with the DOM (e.g., selecting DOM elements, adding event
listeners, and rendering new elements to the page).

Part 1
------

1. In this directory, create an `index.html` file.
2. Also create an `app.js` file.
3. Use a `<script>` tag to load the `app.js` into `index.html`.
    * How can you test if you're loading the file correctly?
4. We'll use `jQuery` for this lab, so load that into your page as
well.
    * There are several ways to load jQuery. How will you do it?
    * Note: You'll want to load `jQuery` _before_ you load your script
    so that `jQuery` is available when your script runs.
5. Create a `<form>` in your HTML file that contains one text input
and one submit button.
6. Add an event listener for when the form is submitted.
    * Think about the different ways to reference your form. Does it
    need an ID, class, or neither?
    * Do you need to use
      [document.ready](http://learn.jquery.com/using-jquery-core/document-ready/)
      so you don't try to refernce your form too early?
    * Listen for the `submit` event.
    * Use `event.preventDefault()` to prevent the page from
    refreshing.
6. When the submit button is clicked, search the
[OMDB API](http://www.omdbapi.com/) for movie titles containing the
search term.
    * How will you know what search term was entered?
        * Some cool ways are to use `this` or `event.target`, but
          there are other ways as well.
    * You'll need to investigate the OMDB home page to learn how to
      use its API.
    * Use one of `jQuery`'s AJAX methods.
    * You don't need to sign up for an API key, unless you want to.
7. When the list of matching movies is returned, render the movie
titles to the screen.
    * A good strategy is to have a container in your HTML file that
    will specifically hold the search results.
    * Use jQuery to construct new DOM elements for the titles and add
    them to the page.
    * You may want to clear any old results before rendering new ones.

Part 2
------

