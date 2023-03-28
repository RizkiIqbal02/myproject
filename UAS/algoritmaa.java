import java.util.*;

class BFS {
    static Map<String, Integer> distances = new HashMap<>();
    static Map<String, List<String>> graph = new HashMap<>();

    public static void main(String[] args) {
        //inisialisasi jarak antar kecamatan
        distances.put("Cibeureum-Baros", 5);
        distances.put("Cibeureum-Citamiang", 3);
        distances.put("Citamiang-Cikole", 6);
        distances.put("Cibeureum-Cikole", 10);
        distances.put("Baros-Cikole", 8);
        distances.put("Cikole-Gunung Parang", 4);
        distances.put("Gunung Parang-Subangjaya", 7);
        distances.put("Baros-Gunung Parang", 17);

        //inisialisasi graph
        graph.put("Cibeureum", Arrays.asList("Citamiang"));
        graph.put("Citamiang", Arrays.asList("Cikole"));
        graph.put("Cikole", Arrays.asList("Gunung Parang"));

        //mencari jarak terpendek dari Cibeureum ke Gunung Parang dengan jalur Cibeureum-Citamiang-Cikole-Gunung Parang
        int shortestDistance = findShortestDistance("Cibeureum", "Gunung Parang");
        System.out.println("Jarak terpendek dari Cibeureum ke Gunung Parang dengan jalur Cibeureum-Citamiang-Cikole-Gunung Parang adalah " + shortestDistance + " km");
    }

    static int findShortestDistance(String start, String end) {
        Queue<String> queue = new LinkedList<>();
        Map<String, Integer> visited = new HashMap<>();
        queue.add(start);
        visited.put(start, 0);

        while (!queue.isEmpty()) {
            String current = queue.remove();
            int currentDistance = visited.get(current);

            if (current.equals(end)) {
                return currentDistance;
            }

            for (String neighbor : graph.get(current)) {
                if (!visited.containsKey(neighbor)) {
                    int distance = currentDistance + distances.get(current + "-" + neighbor);
                    visited.put(neighbor, distance);
                    queue.add(neighbor);
                }
            }
        }

        return -1; //jika tidak ditemukan jalur
    }
}