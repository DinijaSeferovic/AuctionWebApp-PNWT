package ba.tim10.items.utils;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;

public class TimeDifferenceUtil {

    public TimeDifferenceUtil() {
    }

    public String getTimeDifference(LocalDateTime targetDate) {

        long minutes = ChronoUnit.MINUTES.between(LocalDateTime.now(), targetDate)%60;
        long hours = ChronoUnit.HOURS.between(LocalDateTime.now(), targetDate)%24;
        long days = ChronoUnit.DAYS.between(LocalDateTime.now(), targetDate)%30;
        long months = ChronoUnit.MONTHS.between(LocalDateTime.now(), targetDate)%12;
        long years = ChronoUnit.YEARS.between(LocalDateTime.now(), targetDate);

        String result = "";
        if (years>0) result += years + "y ";
        if (months>0) result += months + "m ";
        if (days>0) result += days + "d ";
        if (hours>0) result += hours + "h ";
        if (minutes>0) result += minutes + "m ";
        return result;
    }
}