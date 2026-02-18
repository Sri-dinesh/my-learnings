import java.util.*;

class Solution {

    ArrayList<Integer> countDistinct(int arr[], int k) {
        ArrayList<Integer> result = new ArrayList<>();
        HashMap<Integer, Integer> freq = new HashMap<>();
        // Step 1: Build first window
        for (int i = 0; i < k; i++) {
            freq.put(arr[i], freq.getOrDefault(arr[i], 0) + 1);
        }
        result.add(freq.size());
        // Step 2: Slide the window
        for (int i = k; i < arr.length; i++) {
            // Add new element (right side)
            freq.put(arr[i], freq.getOrDefault(arr[i], 0) + 1);
            // Remove old element (left side)
            int old = arr[i - k];
            freq.put(old, freq.get(old) - 1);
            if (freq.get(old) == 0) {
                freq.remove(old);
            }
            result.add(freq.size());
        }
        return result;
    }
}

public class CountDistinctElements_gfg {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Solution solution = new Solution();
        System.out.println("Enter no.of array elements:");
        int n = sc.nextInt();
        int[] arr = new int[n];
        System.out.println("Enter array elements:");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        System.out.println("Enter window size:");
        int k = sc.nextInt();

        ArrayList<Integer> result = solution.countDistinct(arr, k);
        System.out.println(result);
        sc.close();
    }
}
