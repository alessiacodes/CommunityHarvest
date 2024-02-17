package entities;

public class Post {
    // TODO add photo option
    private String title;
    private String description;
    private String quantityAvailible;

    private boolean pickup;
    private boolean delivery;
    private boolean swap;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getQuantityAvailible() {
        return quantityAvailible;
    }

    public void setQuantityAvailible(String quantityAvailible) {
        this.quantityAvailible = quantityAvailible;
    }

    public boolean isPickup() {
        return pickup;
    }

    public void setPickup(boolean pickup) {
        this.pickup = pickup;
    }

    public boolean isDelivery() {
        return delivery;
    }

    public void setDelivery(boolean delivery) {
        this.delivery = delivery;
    }

    public boolean isSwap() {
        return swap;
    }

    public void setSwap(boolean swap) {
        this.swap = swap;
    }
}
