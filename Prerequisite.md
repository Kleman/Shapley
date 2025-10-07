This app is meant for users to compute Shapley indices in a no-code framework. Thanks to this tool, they will be able to add entities, add links and synergies between these entities into what is called a scenario.

It revolves around multiple key elements:
- An editable title
- A save/load functionality that enable users to export and import scenarios.
- A list of entities and links between them. Users should be able to add entities and remove them. In a similar fashion, entities can be linked one with another and synergies (in the Shapley value sense) can be inputed.
- A graph that represent in a visual fashion what has been inputed in the list of entities and links. This graph should be dynamic in the sense that it should show any changes in the list of entities and links. Additionally, the edges between nodes should be proportional in width with the synergies.
- A square matrix that shows as a heatmap the synergies between the entities. The diagonal represent the first-order influence (that is, the coalition with only the entity in the Shapley framework) and other values should represent the value of the coalition with associated entities. Note that we assume that all synergies are limited with two elements in this case. As for the graph, the matrix should render in real time any changes in the entity and synergy list.
- A table that exhibit for every entity its Shapley value. Add a final row that is the total (i.e. the complete coalition) that should show 100% as a percentage of the whole value and the actual value.

Some additional information:
- add relevant information and help when necessary.
- add some examples that can be loaded so that users can see the final result
