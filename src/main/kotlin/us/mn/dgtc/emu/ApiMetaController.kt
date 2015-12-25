package us.mn.dgtc.emu

import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

/**
 * Created by David Groomes on 12/25/2015.
 */
@RestController
@RequestMapping("api")
class ApiMetaController {

    @RequestMapping("meta")
    fun getApiMetaData() : String = "fake API metadata"

}
