package vue.element.servlet;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by Mr_yyy on 2018/3/8.
 */

@WebServlet("/route")
public class RouteServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
        this.doPost(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
        String type = request.getParameter("type");
        if (type != null && type.trim().length() > 0) {
            response.sendRedirect("http://127.0.0.1:8088/basic?type="+ type);
        } else {
            response.sendRedirect("/route.html");
        }
    }

    @Override
    public void init(ServletConfig config) {}
}
