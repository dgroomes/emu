package us.mn.dgtc.emu

import org.springframework.web.bind.annotation.*

/**
 * Get information about this application's API
 * TODO implement something useful; so far this is only a demo
 */
@RestController
@RequestMapping("api/meta")
class ApiMetaController {

    @RequestMapping(method = arrayOf(RequestMethod.GET))
    @ResponseBody
    fun getApiMetaData() : String = "fake API metadata"
}
