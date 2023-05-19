package ba.tim10.payments.domains;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import org.hibernate.annotations.UuidGenerator;

import java.util.Date;
import java.util.UUID;

@Entity
public class Transaction {

    @Id
    @GeneratedValue
    @UuidGenerator
    private UUID id;

    private Date dateOfTransaction;
    private Double amount;
    private Boolean success;
    private String stripeInfo;


    protected Transaction() {}

    public Transaction(UUID id, Date dateOfTransaction, Double amount, Boolean success, String stripeInfo) {
        this.id = id;
        this.dateOfTransaction = dateOfTransaction;
        this.amount = amount;
        this.success = success;
        this.stripeInfo = stripeInfo;
    }

    @Override
    public String toString() {
        return String.format(
                "Payment[id=%d]",
                id);
    }


    public Date getDateOfTransaction() {
        return dateOfTransaction;
    }

    public void setDateOfTransaction(Date dateOfTransaction) {
        this.dateOfTransaction = dateOfTransaction;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public Boolean getSuccess() {
        return success;
    }

    public void setSuccess(Boolean success) {
        this.success = success;
    }

    public String getStripeInfo() {
        return stripeInfo;
    }

    public void setStripeInfo(String stripeInfo) {
        this.stripeInfo = stripeInfo;
    }
}



