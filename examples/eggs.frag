// The MIT License
// Copyright © 2014 Inigo Quilez
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main()
{
	vec2 uv = (-u_resolution.xy+2.0*gl_FragCoord.xy)/u_resolution.y;

    // anim
	vec2 c1 = 0.8*sin( u_time*1.0 + vec2(4.0,0.5) + 1.0);
	vec2 c2 = 0.8*sin( u_time*1.3 + vec2(1.0,2.0) + 2.0);
	vec2 c3 = 0.8*sin( u_time*1.5 + vec2(0.0,2.0) + 4.0);
	
    // potential (3 metaballs)
    float v = 0.0;	
	v += 1.0-smoothstep(0.0,0.7,length(uv-c1));
	v += 1.0-smoothstep(0.0,0.7,length(uv-c2));
	v += 1.0-smoothstep(0.0,0.7,length(uv-c3));

    // color	
	vec3 col = mix( vec3(v), vec3(1.0,0.6,0.0), smoothstep(0.9,0.91,v) );
	
	gl_FragColor = vec4(col,1.0);
}