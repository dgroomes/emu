package us.mn.dgtc.emu

import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

/**
 * Get information about this application's API
 * TODO implement something useful; so far this is only a demo
 */
@RestController
@RequestMapping("api")
class ApiMetaController {

    @RequestMapping("meta")
    fun getApiMetaData() : String = "fake API metadata"
}
