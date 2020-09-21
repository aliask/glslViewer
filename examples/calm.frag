#define INTENSITY 250.5
#define GLOW 0.7

precision mediump float;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec3 blob(vec2 uv, vec3 color, vec2 speed, vec2 size, float time) {
	vec2 point = vec2(
		sin(speed.x * time) * size.x,
		cos(speed.y * time) * size.y
	);

	float d = 1.0 / distance(uv, point);
	d = pow(d / (INTENSITY+50.0*d), GLOW);
	d *= 4.0;

	return vec3(color.r * d, color.g * d, color.b * d);
}

void main() {
	vec2 uv = -1.0 + 2.0 * (gl_FragCoord.xy / u_resolution.xy);

	float time = u_time * 0.15;
	
	vec4 color = vec4(0.0, 0.0, 0.0, 1.0);
	color.rgb += blob(uv, vec3(0.6, 0.7, 1.0), vec2(1.7, 2.2), vec2(0.9, 1.1), time);
	color.rgb += blob(uv, vec3(0.7, 0.7, 0.8), vec2(1.2, 2.3), vec2(1.3, 1.2), time);
	color.rgb += blob(uv, vec3(0.7, 0.8, 0.9), vec2(2.3, 2.1), vec2(1.2, 1.3), time);
	color.rgb += blob(uv, vec3(0.3, 0.4, 1.0), vec2(2.1, 1.0), vec2(1.1, 1.4), time);

	gl_FragColor = color;
}