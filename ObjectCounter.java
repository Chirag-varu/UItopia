public class ObjectCounter {
    // Static variable to keep track of the number of objects created
    private static int count = 0;

    // Constructor that increments the count each time an object is created
    public ObjectCounter() {
        count++;
    }

    // Static method to get the current count of objects
    public static int getCount() {
        return count;
    }

    public static void main(String[] args) {
        // Creating objects of ObjectCounter class
        ObjectCounter obj1 = new ObjectCounter();
        ObjectCounter obj2 = new ObjectCounter();
        ObjectCounter obj3 = new ObjectCounter();

        // Displaying the number of objects created
        System.out.println("Number of objects created: " + ObjectCounter.getCount());
    }
}
