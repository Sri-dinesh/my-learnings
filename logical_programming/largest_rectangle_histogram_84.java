import java.util.*;

public class largest_rectangle_histogram_84 {

    public static int largestRectangleArea(int[] heights) {
        int n = heights.length;
        int[] left = new int[n];
        int[] right = new int[n];

        // Initialize left with -1 and right with n
        Arrays.fill(left, -1);
        Arrays.fill(right, n);

        int maxArea = 0;
        Stack<Integer> st = new Stack<>();

        for (int i = 0; i < n; i++) {
            // While stack is not empty and current height is less than the height of the bar at the top of the stack
            while (!st.isEmpty() && heights[st.peek()] > heights[i]) {
                // The current index 'i' is the right boundary for the index at the top of the stack
                right[st.peek()] = i;
                st.pop();
            }
            if (!st.isEmpty()) {
                left[i] = st.peek();
            }
            st.push(i);
        }
        for (int i = 0; i < n; i++) {
            int width = right[i] - left[i] - 1;
            int area = heights[i] * width;
            maxArea = Math.max(maxArea, area);
        }
        return maxArea;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter no. of elements:");
        int n = sc.nextInt();
        int[] readNums = new int[n];

        System.out.println("Enter the elements:");
        for (int i = 0; i < n; i++) {
            readNums[i] = sc.nextInt();
        }

        long start1 = System.nanoTime();
        int result1 = largestRectangleArea(readNums);
        long end1 = System.nanoTime();

        System.out.println("Result (Run 1): " + result1);
        System.out.println("Time taken (Run 1): " + (end1 - start1) + " ns");

        sc.close();
    }
}
