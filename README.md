What is JML?

JML is an alternative syntax for document writing, inspired by the proliferation of data-driven document formats.

Currently applications define a state and a rendering and spend a considerable amount of code and boilerplate mapping between the two.
What if your HTML were instead programatically derived from your state?  It would require you to structure your state in a specific way to match your document,
but you would no longer need to worry about state mappings, you could simply write an application around changing and updating the state and allow an engine to generate your document.

Principals: 
Everything is a Div.
Everything is an array, object, or literal.