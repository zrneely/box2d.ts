/*
* Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/
System.register(["../collision/b2_collide_edge.js", "./b2_contact.js"], function (exports_1, context_1) {
    "use strict";
    var b2_collide_edge_js_1, b2_contact_js_1, b2EdgeAndCircleContact;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (b2_collide_edge_js_1_1) {
                b2_collide_edge_js_1 = b2_collide_edge_js_1_1;
            },
            function (b2_contact_js_1_1) {
                b2_contact_js_1 = b2_contact_js_1_1;
            }
        ],
        execute: function () {
            b2EdgeAndCircleContact = class b2EdgeAndCircleContact extends b2_contact_js_1.b2Contact {
                static Create() {
                    return new b2EdgeAndCircleContact();
                }
                static Destroy(contact) {
                }
                Evaluate(manifold, xfA, xfB) {
                    b2_collide_edge_js_1.b2CollideEdgeAndCircle(manifold, this.GetShapeA(), xfA, this.GetShapeB(), xfB);
                }
            };
            exports_1("b2EdgeAndCircleContact", b2EdgeAndCircleContact);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYjJfZWRnZV9jaXJjbGVfY29udGFjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9keW5hbWljcy9iMl9lZGdlX2NpcmNsZV9jb250YWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0VBZ0JFOzs7Ozs7Ozs7Ozs7Ozs7WUFTRix5QkFBQSxNQUFhLHNCQUF1QixTQUFRLHlCQUFxQztnQkFDeEUsTUFBTSxDQUFDLE1BQU07b0JBQ2xCLE9BQU8sSUFBSSxzQkFBc0IsRUFBRSxDQUFDO2dCQUN0QyxDQUFDO2dCQUVNLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBa0I7Z0JBQ3hDLENBQUM7Z0JBRU0sUUFBUSxDQUFDLFFBQW9CLEVBQUUsR0FBZ0IsRUFBRSxHQUFnQjtvQkFDdEUsMkNBQXNCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNqRixDQUFDO2FBQ0YsQ0FBQSJ9