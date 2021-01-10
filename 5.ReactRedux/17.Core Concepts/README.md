Core Concepts
===

Redux can be described using the following principles:

Single source of truth
---
The global state of the app is stored in a single **store**.

State is read-only
---
You can change the state only by dispatching **actions**. Action are objects, that contain information about what should be changed.

Pure reducers
---
Reducers are functions that handle the actions and return the next state of the application. Reducers need to be **pure**, meaning they cannot modify the state, they need to return a new state object.
