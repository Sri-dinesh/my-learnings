import java.util.*;

class Solution {

    public ArrayList<Integer> boundaryTraversal(int mat[][]) {
        ArrayList<Integer> result = new ArrayList<>();
        int m = mat.length;
        int n = mat[0].length;
        // Top row: left to right
        for (int j = 0; j < n; j++) {
            result.add(mat[0][j]);
        }
        // Right column: top+1 to bottom
        for (int i = 1; i < m; i++) {
            result.add(mat[i][n - 1]);
        }
        // Bottom row: right-1 to left
        if (m > 1) {
            for (int j = n - 2; j >= 0; j--) {
                result.add(mat[m - 1][j]);
            }
        }
        // Left column: bottom-1 to top+1
        if (n > 1) {
            for (int i = m - 2; i >= 1; i--) {
                result.add(mat[i][0]);
            }
        }
        return result;
    }
}

public class BoundaryMatrix_gfg {

    public static void main(String[] args) {
        Solution solution = new Solution();
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number of rows:");
        int m = sc.nextInt();
        System.out.println("Enter the number of columns:");
        int n = sc.nextInt();
        int[][] matrix = new int[m][n];
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                matrix[i][j] = sc.nextInt();
            }
        }
        ArrayList<Integer> boundary = solution.boundaryTraversal(matrix);
        System.out.println(boundary);
        sc.close();
    }
}
