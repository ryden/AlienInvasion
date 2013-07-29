function MathUtil() {}
MathUtil.clamp = function(a, v, b)
{
	return Math.min(Math.max(a, v), b);
}
