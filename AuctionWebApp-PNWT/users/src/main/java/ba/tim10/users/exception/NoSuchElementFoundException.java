package ba.tim10.users.exception;

public class NoSuchElementFoundException extends RuntimeException {

    public NoSuchElementFoundException(String message){
        super(message);
    }
}