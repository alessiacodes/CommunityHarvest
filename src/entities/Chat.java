package entities;
import java.util.List;
public class Chat {
    private User user1;
    private User user2;
    private List<String> messages; // Where messages are stored, [0] is earliest message
}
