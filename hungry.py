print "I am hungry !!"


def arg_dec(operation):
    def wrapper(*args, **kwargs):
        for arg in args:

            if not isinstance(arg, int):
                raise ValueError('The arguments are not integers')
                break
        return operation(*args, **kwargs)

    return wrapper

class Sum(object):
    def __init__(self,a,b):
        self.a =int(a)
        self.b=int(b)

    @arg_dec
    def sum(self, a, b):
        return a+b

class Sub:
    def __init__(self,a,b):
        self.a =a
        self.b=b

    @arg_dec
    def sub(a, b):
        print a - b
        return a - b

s = Sum(1,2)

print "The Sum of is ",s.sum

