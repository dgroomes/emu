package us.mn.dgtc.emu

import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.client.RestTemplate

/**
 * Created by David Groomes on 12/26/2015.
 *
 * Produces jokes.
 *
 * Implementation: proxies the Internet Chuck Norris Database (icndb.com)
 * todo for demo purposes, I want to throttle the requests, so I can flex some "reactive" programming
 */
@RestController
@RequestMapping("api/jokes")
class JokesController {

    @ResponseBody
    @RequestMapping(method = arrayOf(RequestMethod.GET))
    fun getOne() : String = RestTemplate().getForObject("http://api.icndb.com/jokes/random/1", String::class.java)

}