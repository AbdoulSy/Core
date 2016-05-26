# Core

The Purpose of the Core object is to unify all ways, methods of development that 
I've gathered throughout the days and to dump space to free my brain.
Not only that, it is a way to hopefully include at the most abstract levels everything related to one single line of code.

At this stage of development the previous paragraph will not make sense. In simplest terms its an unified interface for metaprogramming.

## Opiniated :

Of course everything here is opiniated, it is my ways, everything here is subject to change,
standards, code standards, programation architecture.

## The Assumptions :

To create this interface, I assume these points :
  - a line of code has a purpose
  - the purpose of a line of code can be retrieved at a later time
  - a line of code has a programming language or is pure data
  - the purpose of a line of code should not be rewritten 
  
## The Interface :

The interface of a Core object should look like this

   Interface <CoreInterface>
    + String getDocumentationURI ()
    + String getVersion ()
    + String getAuthor ()
    + String getCommitId ()
    + String getErrorFormat ()
    + String getExample ()
    + String getPurpose ()
    + String getName ()
    + String getDependencyList ()
    + String getLang ()
    + String test ()
    + Function onLoad ()
    + Function onCompile ()
    + Function onDestroy ()
    + Function render ()
    + Function update ()
    + Function next ()
    + Function parent ()
    


