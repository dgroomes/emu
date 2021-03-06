package us.mn.dgtc.emu;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value
import org.springframework.boot.context.event.ApplicationReadyEvent
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

/**
 * Event listeners. For fun.
 */
@Component
open class Listeners @Autowired constructor(@Value("\${host.url}") val hostUrl: String,
                                            @Value("\${startup.endpoints}") val startupEndpoints: Array<String>) {

    @EventListener(ApplicationReadyEvent::class)
    fun listUsefulStartupEndpoints() = startupEndpoints.forEach {
        println("check out: ${hostUrl + it}")
    }
}
