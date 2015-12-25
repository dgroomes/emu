package us.mn.dgtc.emu;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

/**
 * Event listeners
 */
@Component
class Listeners @Autowired constructor(val whoami : String) {

    @EventListener(ContextRefreshedEvent::class)
    fun contextRefreshedEvent() : Unit = println("whoami: ${whoami}")
}
