import java.util.HashMap;
import java.util.LinkedList;
import java.util.Map;
import java.util.Queue;

class Graph {
    private Map<String, Map<String, Integer>> edges = new HashMap<>();

    public void addEdge(String source, String destination, int weight) {
        if (!edges.containsKey(source)) {
            edges.put(source, new HashMap<>());
        }
        edges.get(source).put(destination, weight);
    }

    public Map<String, Integer> getEdges(String source) {
        return edges.getOrDefault(source, new HashMap<>());
    }
}

class BFS {
    private Graph graph;
    private Map<String, Integer> distance = new HashMap<>();
    private Map<String, String> previous = new HashMap<>();

    public BFS(Graph graph) {
        this.graph = graph;
    }

    public void shortestPath(String start) {
        distance.put(start, 0);
        previous.put(start, null);

        Queue<String> queue = new LinkedList<>();
        queue.offer(start);

        while (!queue.isEmpty()) {
            String vertex = queue.poll();

            for (Map.Entry<String, Integer> edge : graph.getEdges(vertex).entrySet()) {
                String destination = edge.getKey();
                int weight = edge.getValue();
                if (!distance.containsKey(destination)) {
                distance.put(destination, distance.get(vertex) + weight);
                previous.put(destination, vertex);
                queue.offer(destination);
            }
        }
    }
}
public int getShortestDistance(String destination) {
    return distance.get(destination);
}

public String getShortestPath(String destination) {
    StringBuilder path = new StringBuilder();
    String current = destination;

    while (current != null) {
        path.insert(0, current + " -> ");
        current = previous.get(current);
    }

    return path.toString();
}

public static void main(String[] args) {
Graph graph = new Graph();
graph.addEdge("Cibeureum", "Baros", 5);
graph.addEdge("Cibeureum", "Citamiang", 3);
graph.addEdge("Citamiang", "Cikole", 6);
graph.addEdge("Cikole", "Gunung Parang", 4);
graph.addEdge("Baros", "Cikole", 8);
graph.addEdge("Baros", "Gunung Parang", 17);
graph.addEdge("Gunung Parang", "Subangjaya", 7);
BFS bfs = new BFS(graph);
bfs.shortestPath("Cibeureum");
System.out.println("Jarak terpendek dari Cibeureum ke Gunung Parang: " + bfs.getShortestDistance("Gunung Parang") + "km");
System.out.println("Rute terpendek: " + bfs.getShortestPath("Gunung Parang"));
}
}
