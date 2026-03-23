from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import Product,Category
from .serializers import ProductSerializer,CategorySerializer


@api_view(['GET'])
def get_products(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products , many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_product_by_id(request, id):
    product = get_object_or_404(Product , pk =id)
    serializer = ProductSerializer(product)
    return Response(serializer.data)



@api_view(['GET'])
def get_categories(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories , many=True)
    return Response(serializer.data)



@api_view(['GET'])
def get_category_by_id(request,id):
    category = get_object_or_404(Category, pk = id)
    serializer = CategorySerializer(category)
    return Response(serializer.data)


@api_view(['GET'])
def get_products_by_category_id(request , id):
    products = Product.objects.filter(category = id)
    serializer = ProductSerializer(products , many = True)
    return Response(serializer.data)