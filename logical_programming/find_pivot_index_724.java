import java.util.*;

public class find_pivot_index_724 {

    // O(n^2)
    public static int pivotIndex(int[] nums) {
        int n = nums.length;
        for (int i = 0; i < n; i++) {
            int left = 0;
            int right = 0;
            for (int j = 0; j < i; j++) left += nums[j];
            for (int j = i + 1; j < n; j++) right += nums[j];
            if (left == right) return i;
        }
        return -1;
    }

    // O(n)
    public static int pivotIndexOptimized(int[] nums) {
        int totalSum = 0;
        int leftSum = 0;
        for (int num : nums) {
            totalSum += num;
        }
        for (int i = 0; i < nums.length; i++) {
            int rightSum = totalSum - leftSum - nums[i];
            if (leftSum == rightSum) {
                return i;
            }
            leftSum += nums[i];
        }
        return -1;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter no.of elements:");
        int n = sc.nextInt();
        int[] readNums = new int[n];

        for (int i = 0; i < n; i++) {
            readNums[i] = sc.nextInt();
        }

        long start1 = System.nanoTime();
        int result1 = pivotIndex(readNums);
        long end1 = System.nanoTime();

        long start2 = System.nanoTime();
        int result2 = pivotIndexOptimized(readNums);
        long end2 = System.nanoTime();

        System.out.println("Result: " + result1);
        System.out.println("Time taken (O(n^2)): " + (end1 - start1) + " ns");
        System.out.println("Result (Optimized): " + result2);
        System.out.println("Time taken (O(n)): " + (end2 - start2) + " ns");

        sc.close();
    }
}
