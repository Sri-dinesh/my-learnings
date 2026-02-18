import java.util.*;

class Solution {

    public boolean containsNearbyDuplicate(int[] nums, int k) {
        HashSet<Integer> hs = new HashSet<>(); // "window" of recent numbers
        for (int i = 0; i < nums.length; i++) {
            // CHECK: Is this number already in our window?
            if (hs.contains(nums[i])) return true; // Found a duplicate within k distance
            // ADD: Put current number in our window
            hs.add(nums[i]);
            // CLEAN UP: Window too big? Remove the oldest number
            if (i >= k) hs.remove(nums[i - k]); // Remove number that's now 'k' steps behind
        }
        return false; // No nearby duplicates found
    }
}

public class ContainsDuplicatesII_219 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter no.of Array values:");
        int n = sc.nextInt();
        System.out.println("Enter Array values: ");
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) {
            nums[i] = sc.nextInt();
        }

        System.out.println("Enter value of k:");
        int k = sc.nextInt();
        System.out.println(new Solution().containsNearbyDuplicate(nums, k));
        sc.close();
    }
}
