# SimplerBrython

https://denis-migdal.github.io/SimplerBrython/
https://denis-migdal.github.io/SimplerBrython/doc
https://groups.google.com/g/brython/c/5Y4FneO3tzU/m/KnnzMS6QAAAJ

## Currently Working on...

- Editor
    - [ ] DOC !!!
        - [ ] Presentation/goal
- I want the transpiler to be as simple as possible for educational purposes (I want to put student projects on it, so that they can play with it).
- I want the generated JS to be as simple as possible to read for educational purposes (I want students to be able to read it).
- I will not implement all Python features, only some basic ones.
- I don't care to be fully CPython compliant.
- I don't care to be able to support Python libraries.
- I don't care about performances.
- I only care about stability.
- I will publish some PoC, for AST tree structure, AST tree printing, unit tests, documentations, etc. that I hope could be interesting and potentially adapted for Brython.
- I think some design choices I'll make could be interesting for Brython, so it could serve as a PoC on the way some features can be implemented/architectured.

        - [ ] Build + usage
        - [ ] Generated JS: op(1n, '+', 1n) => need to override operators, can't know type of variables at transpilation type. In vanilla JS would simply write 1n + 1n / array[x] / - 2, etc // types hint

    - [ ] split files / core module
        - [ ] runtime
    - [ ] Check nodes operator priority (add parenthesis)
    - [ ] Check operators result_type
    - [ ] Add features
        => /!\ limit children to what I can handle.
        - [ ] if/else/elif
            - [ ] booleans
        - [ ] is / ===
        - [ ] define variable
        - [ ] pass
        - [ ] Indentation

        - [ ] Types : float/str/None
        - [ ] Basic operators : + / * - + neg numbers
        - [ ] f-string

        - [ ] while
        - [ ] for in
            - [ ] range
        

        - [ ] define fct
            - [ ] Async/await

        - [ ] List/Tuple
        - [ ] dict
        - [ ] get/set attr
        - [ ] some APIs (e.g. str methods)

        - [ ] import/export (?)
        - [ ] define class+method
    - [ ] Error message : highlight code / lineno / offset/end_offset => find nearest node ?
    - genlist
    - brython perfs : split Py2JS into Py2AST and AST2JS
    cf https://github.com/brython-dev/brython/blob/master/www/src/py2js.js

## Student projects

- [ ] Python code parsing to produce AST.
- [ ] Documentation (style+markdown+complete)
- [ ] Add features (complete SBrython)
- [ ] CPython/PEP compliant
    - [ ] debug = true
    - [ ] async as coroutines = true
    - [ ] enforce python type = false